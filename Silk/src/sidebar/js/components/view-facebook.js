/**
 * External dependencies.
 */
import React from 'react'

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { TextControl, TextareaControl } = wp.components;

/**
 * ViewFacebook component class.
 */
class ViewFacebook extends React.Component {
    
    constructor() {

        super()

        this.state = {
            value: false
        }

    }


    render() {

        return (
            <Fragment>

                <h3>Facebook inputs view</h3>

                <TextControl
                    label="Title"
                    value=""
                    onChange=""
                />

                <TextareaControl
                    label="Description"
                    value=""
                />

                <TextControl
                    label="Image"
                    value=""
                    onChange=""
                />

            </Fragment>
        )

    }

}

export default ViewFacebook
