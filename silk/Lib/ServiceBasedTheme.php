<?php

namespace Silk\Lib;


use Silk\Silk;
use Silk\Lib\Container;


class ServiceBasedTheme {

    /**
     * The main theme class.
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

        $this->initialize_theme();
        
    }


    /**
     * initialize_theme.
     *
     * Call the main theme class and run all services.
     *
     * @return void
     */
    public function initialize_theme() : void {

        $this->set_theme_class();

        $this->get_theme_services();

        $this->run_theme_services();

    }


    /**
     * set_theme_class.
     *
     * Get instance of the main theme class.
     *
     * @return void
     */
    private function set_theme_class() : void {

        if( $this->themeclass == null ) {

            $this->themeclass = new Silk();

        }
        
    }


    /**
     * get_theme_services.
     *
     * Get array of services.
     *
     * @return void
     */
    private function get_theme_services() : void {

        if( $this->services == null ) {

            $this->services = $this->themeclass->get_service_classes();

        }
        
    }


    /**
     * run_theme_services.
     *
     * Check and instantiate the service classes.
     *
     * @return void
     */
    private function run_theme_services() : void {

        $services = $this->services;

        $builder = new \DI\ContainerBuilder();

        $builder->addDefinitions([

            FunctionsPhp\Dependencies\Single::class => \DI\factory('FunctionsPhp\Dependencies\Single::instance')
            
        ]);

        $container = $builder->build();

        foreach ( $services as $id => $service ) {

            if ( is_subclass_of( $service , 'FunctionsPhp\Lib\Conditional' ) ) {
                
                if( ! $service::is_needed() ) {
   
                    continue;

                }
                
            }

            $service = $container->get( $service  );

            if ( is_subclass_of( $service , 'FunctionsPhp\Lib\Registerable' ) ) {

                $service->register();

            }

        }

    }
    
}
