<?php

namespace Silk\Lib;


use Silk\Silk;
use Silk\Lib\Container;


class ServiceBasedTheme {

    /**
     * The main plugin class.
     */
    private $themeclass = null;

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

        $this->set_plugin_class();

        $this->get_plugin_services();

        $this->run_plugin_services();

    }


    /**
     * set_plugin_class.
     *
     * Get instance of the main plugin class.
     *
     * @return void
     */
    private function set_plugin_class() : void {

        if( $this->themeclass == null ) {

            $this->themeclass = new Silk();

        }
        
    }


    /**
     * get_plugin_services.
     *
     * Get array of services.
     *
     * @return void
     */
    private function get_plugin_services() : void {

        if( $this->services == null ) {

            $this->services = $this->themeclass->get_service_classes();

        }
        
    }


    /**
     * run_plugin_services.
     *
     * Check and instantiate the service classes.
     *
     * @return void
     */
    private function run_plugin_services() : void {

        $services = $this->services;

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
