<?php
/**
 * Register meta fields.
 *
 * @package    Silk
 * @subpackage Silk/Services
 */

namespace Silk\Services;


use Silk\Lib\Service;
use Silk\Lib\Registerable;


final class MetaFields implements Service, Registerable {

    /**
     * Meta field names.
     *
     * @var array $fields
     */
    private $fields = array(
        'silk_g_browser_title',
        'silk_g_description',
        'silk_g_canonical',
        'silk_g_index_follow',
        'silk_fb_open_graph_type',
        'silk_fb_open_graph_title',
        'silk_fb_open_graph_description',
        'silk_fb_open_graph_image',
        'silk_tw_card_type',
        'silk_tw_author_handle',
        'silk_tw_title',
        'silk_tw_description',
        'silk_tw_image',
        'silk_s_type',
        'silk_s_title',
        'silk_s_description',
        'silk_s_image'
    );


    /**
     * Constructor.
     */
    public function __construct() { }


    /**
     * register.
     *
     * Register hooks with WordPress.
     *
     * @return void
     */
    public function register() : void {

        \add_action( 'init' , array( $this , 'register_meta_fields' ) , 1 );

    }


    /**
     * register_meta_fields.
     *
     * Register meta fields for.
     *
     * @return void
     */
    public function register_meta_fields() : void {

        $args = array(
            'show_in_rest' => true,
            'single' => true,
            'type' => 'string',
        );

        foreach( $this->fields as $field ) {

            register_meta( 'post' , $field , $args );

        }
        
    }
    
}
