<?php
/**
 * Enqueue editor sidebar styles and scripts.
 *
 * @package    Silk
 * @subpackage Silk/Services
 */

namespace Silk\Services;


use Silk\Lib\Service;
use Silk\Lib\Registerable;
use Silk\Lib\Conditional;


final class Sidebar implements Service, Registerable, Conditional {


    /**
     * the constructor.
     */
    public function __construct( ) { }


    /**
     * is_needed.
     *
     * Should this service bee initialized?
     *
     * @return bool
     */
    static function is_needed() : bool {

        return  \is_admin() ? true : false;

    }


    /**
     * register.
     *
     * Register hooks with WordPress.
     *
     * @return void
     */
    public function register() : void {

        \add_action( 'enqueue_block_editor_assets' , array( $this , 'enqueue_styles' ) );
        \add_action( 'enqueue_block_editor_assets' , array( $this , 'enqueue_scripts' ) );

    }


    /**
     * enqueue_styles.
     *
     * Enqueue editor sidebar stylesheets.
     *
     * @return void
     */
    public function enqueue_styles() : void {

        wp_enqueue_style( SILK_DOMAIN . '-sidebar' , SILK_PATH . 'dist/css/silk-sidebar.css' , array() , SILK_VERSION , 'all' );
    
    }


    /**
     * enqueue_scripts.
     *
     * Enqueue editor sidebar scripts.
     *
     * @return void
     */
    public function enqueue_scripts() : void {

        \wp_enqueue_script( SILK_DOMAIN . '-sidebar' ,  SILK_PATH . 'dist/js/silk-sidebar.js' , $this->dependancies , SILK_VERSION , 'all' );

    }

}