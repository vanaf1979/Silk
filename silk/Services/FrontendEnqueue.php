<?php
/**
 * Enqueue styles and scripts for the frontend.
 *
 * @package    Silk
 * @subpackage Silk/Services
 */

namespace Silk\Services;


use Silk\Lib\Service;
use Silk\Lib\Registerable;
use Silk\Lib\Conditional;
use Silk\Dependencies\Dep;
use Silk\Dependencies\Single;


final class FrontendEnqueue implements Service, Registerable, Conditional {

    protected $dep;

    protected $single;


    /**
     * the constructor.
     */
    public function __construct( Dep $dep, Single $single ) { 

        $this->dep = $dep;

        $single->echo();

    }


    /**
     * is_needed.
     *
     * Should this service bee initialized?
     *
     * @return bool
     */
    static function is_needed() : bool {

        return ! \is_admin() ? true : false;

    }


    /**
     * register.
     *
     * Register hooks with WordPress.
     *
     * @return void
     */
    public function register() : void {

        \add_action( 'wp_enqueue_scripts' , array( $this , 'enqueue_styles' ) );
        \add_action( 'wp_enqueue_scripts' , array( $this , 'enqueue_scripts' ) );

    }


    /**
     * enqueue_styles.
     *
     * Enqueue stylesheets for the frontend.
     *
     * @return void
     */
    public function enqueue_styles() : void {

        \wp_enqueue_style( SILK_DOMAIN  . '-app' , SILK_PATH . '/style.css' , array() , SILK_VERSION , 'all' );

    }


    /**
     * enqueue_scripts.
     *
     * Enqueue scripts for the frontend.
     *
     * @return void
     */
    public function enqueue_scripts() : void {

        \wp_enqueue_style( SILK_DOMAIN  . '-app' , SILK_PATH . '/style.css' , array() , SILK_VERSION , 'all' );

    }

}