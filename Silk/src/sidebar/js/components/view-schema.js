import React from 'react'

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { TextControl, TextareaControl } = wp.components;


class ViewSchema extends React.Component {
    
    constructor() {

        super()

        this.state = {
            value: false
        }

    }


    render() {

        return (
            <Fragment>

                <h3>Schema inputs view</h3>

                <TextControl
                    label="Schema title"
                    value=""
                    onChange=""
                />

                <TextareaControl
                    label="Description"
                    value=""
                />

            </Fragment>
        )

    }

}

export default ViewSchema
