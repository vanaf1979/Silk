<?php

namespace Silk;


class Silk {


    /**
     * the constructor.
     */
    public function __construct() {

        $this->register_constants();

    }


    /**
     * get_service_classes.
     *
     * Store and return all services classes.
     *
     * @return array
     */
    public function get_service_classes(): array {

        return [
            'TextDomain' => \Silk\Services\TextDomain::class,
            'FrontendEnqueue' => \Silk\Services\FrontendEnqueue::class,
        ];

    }


    /**
     * register_constants.
     *
     * Register constants for this plugin.
     *
     * @return void
     */
    private function register_constants() : void {

        define( 'SILK_DOMAIN' , 'silkseo' );
        define( 'SILK_VERSION' , '0.6.0' );
        define( 'SILK_PATH' , plugin_dir_url( __FILE__ ) );

    }

}
