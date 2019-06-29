<?php
/**
 * Sidebar
 * 
 * Enqueue editor sidebar styles and scripts.
 *
 * @package Silk
 * @subpackage Silk\Services
 * @author Vanaf1979 Stephan Nijman
 * @link https://vanaf1979.nl
 * @since 1.0.0
 * @license GPL-2.0+
 */

namespace Silk\Services;


use Silk\Lib\Service;
use Silk\Lib\Registerable;
use Silk\Lib\Conditional;


final class SettingsApi implements Service, Registerable, Conditional {


    private $namespace = '/va79/v1';


    private $resource_name = 'posts';


    /**
     * __construct.
     * 
     * @access public
     */
    public function __construct( ) { }


    /**
     * is_needed.
     * 
     * Should this service bee initialized?
     * 
     * @uses is_admin() https://developer.wordpress.org/reference/functions/is_admin/
     * 
     * @static
     * @return bool
     */
    static function is_needed() : bool {

        return true;

    }


    /**
     * register.
     *
     * Register hooks with WordPress.
     * 
     * @uses add_action() https://developer.wordpress.org/reference/functions/add_action/
     *
     * @access public
     * @return void
     */
    public function register() : void {
        
        \add_action( 'rest_api_init' , array( $this , 'register_routes' ) );
    }


    /**
     * register_routes.
     *
     * Register api routes with WordPress.
     * 
     * @uses register_rest_route() https://developer.wordpress.org/reference/functions/register_rest_route/
     *
     * @access public
     * @return void
     */
    public function register_routes() : void {

        // http://silk.test/wp-json/va79/v1/posts/?_wpnonce=a9c23fc6f2
        
        \register_rest_route( $this->namespace, '/' . $this->resource_name, array(

            array(
                'methods'   => 'GET',
                'callback'  => array( $this , 'get_items' ),
                'permission_callback' => array( $this , 'get_items_permissions_check' ),
            ),

            'schema' => array( $this , 'get_item_schema' ),

        ));

    }


    /**
     * get_items.
     *
     * Retrueve post items.
     * 
     * @uses get_posts() https://developer.wordpress.org/reference/functions/get_posts/
     * @uses rest_ensure_response() https://developer.wordpress.org/reference/functions/rest_ensure_response/
     *
     * @param WP_REST_Request $request
     * @access public
     * @return \WP_REST_Response
     */
    public function get_items( \WP_REST_Request $request ) : \WP_REST_Response {

        print_r( $request['id'] );

        $args = array(
            'post_per_page' => 5,
        );

        $posts = \get_posts( $args );

        return \rest_ensure_response( $posts );
    }


    /**
     * get_items_permissions_check.
     *
     * Authenticate user can perform action.
     * 
     * @uses current_user_can() https://developer.wordpress.org/reference/functions/current_user_can/
     *
     * @param WP_REST_Request $request
     * @access public
     * @return bool
     */
    public function get_items_permissions_check( \WP_REST_Request $request ) : ?bool {
        
        // AUTH: https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/

        if ( ! current_user_can( 'read' ) ) {

            return new \WP_Error( 'rest_forbidden', esc_html__( 'You cannot view the post resource.' ), array( 'status' => $this->authorization_status_code() ) );
        
        }

        return true;

    }


    /**
     * authorization_status_code.
     *
     * Define the response status code.
     * 
     * @uses is_user_logged_in() https://developer.wordpress.org/reference/functions/is_user_logged_in/
     *
     * @access public
     * @return int
     */
    public function authorization_status_code() : int {
 
        $status = 401;
 
        if ( is_user_logged_in() ) {

            $status = 403;

        }
 
        return $status;

    }


    /**
     * get_item_schema.
     *
     * Define the API schema.
     * 
     * @param WP_REST_Request $request
     * @access public
     * @return array
     */
    public function get_item_schema( \WP_REST_Request $request ) : array {
        $schema = array(
            '$schema'              => 'http://json-schema.org/draft-04/schema#',
            'title'                => 'post',
            'type'                 => 'object',
            'properties'           => array(
                'id' => array(
                    'description'  => esc_html__( 'Unique identifier for the object.', 'my-textdomain' ),
                    'type'         => 'integer',
                    'context'      => array( 'view', 'edit', 'embed' ),
                    'readonly'     => true,
                ),
                'content' => array(
                    'description'  => esc_html__( 'The content for the object.', 'my-textdomain' ),
                    'type'         => 'string',
                ),
            ),
        );
 
        return $schema;
    }


}