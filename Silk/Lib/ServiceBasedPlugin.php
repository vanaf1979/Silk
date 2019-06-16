<?php

namespace Silk\Lib;


use Silk\Silk;
use Silk\Lib\Container;


class ServiceBasedPlugin {

    /**
     * The main plugin class.
     */
    private $pluginclass = null;

    /**
     * Array of services.
     */
    private $services = null;


    /**
     * the constructor.
     */
    public function __construct() {

        $this->initialize_plugin();
        
    }


    /**
     * initialize_plugin.
     *
     * Call the main plugin class and run all services.
     *
     * @return void
     */
    public function initialize_plugin() : void {

        $this->get_plugin_class();

        $this->run_services();

    }


    /**
     * get_plugin_class.
     *
     * Get instance of the main plugin class.
     *
     * @return Silk
     */
    private function get_plugin_class() : Silk {

        if( $this->pluginclass == null ) {

            $this->pluginclass = new Silk();

        }

        return $this->pluginclass;
        
    }


    /**
     * get_services.
     *
     * Get array of services.
     *
     * @return array
     */
    private function get_services() : array {

        if( $this->services == null ) {

            $this->services = $this->pluginclass->get_service_classes();

        }

        return $this->services;
        
    }


    /**
     * run_services.
     *
     * Check and instantiate the service classes.
     *
     * @return void
     */
    private function run_services() : void {

        $services = $this->get_services();

        $builder = new \DI\ContainerBuilder();

        $builder->addDefinitions([

            Silk\Dependencies\Single::class => \DI\factory('Silk\Dependencies\Single::instance')
            
        ]);

        $container = $builder->build();

        foreach ( $services as $id => $service ) {

            if ( is_subclass_of( $service , 'Silk\Lib\Conditional' ) ) {
                
                if( ! $service::is_needed() ) {
   
                    continue;

                }
                
            }

            $service = $container->get( $service  );

            if ( is_subclass_of( $service , 'Silk\Lib\Registerable' ) ) {

                $service->register();

            }

        }

    }
    
}
