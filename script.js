jQuery(function ($) {
    var templates = {
        break: function (fieldData) {
            return {
                field: '<hr class=' + fieldData.className + '>'
            };
        },
        signature: function (fieldData) {
            return {
                field: `<section class="signature-component">
                        <h1>Draw Signature</h1>
                        <h2>with mouse or touch</h2>
                        <canvas id="signature-pad" width="400" height="200"></canvas>
                    <div>
                        <button id="save">Save</button>
                        <button id="clear">Clear</button>
                        <button id="showPointsToggle">Show points?</button>
                    </div>
                    <p>
                    <br />
                    <a href="https://codepen.io/kunukn/pen/bgjzpb/" target="_blank">Throttling without lag example here</a><br />
                    <br />
                    <a href="https://github.com/szimek/signature_pad" target="_blank">Signature Pad</a> with custom Simplifying and Throttling
                    </p>
                </section>`
            }
        }
    };
    $(document.getElementById('fb-editor')).formBuilder({
        dataType: 'xml',
        disabledAttrs: ['access'],
        disableFields: [
            'autocomplete',
            'button',
            'hidden',
            'number',
            'select'
        ],
        fieldRemoveWarn: false,
        controlPosition: 'left',
        inputSets: [
            {
                label: 'Section Break',
                name: 'section_break', // optional - one will be generated from the label if name not supplied
                showHeader: false, // optional - Use the label as the header for this set of inputs
                fields: [
                    {
                        type: 'break',
                        label: 'Section Break',
                    },
                ]
            },
            // {
            //     label: 'Signature',
            //     name: 'signature', // optional - one will be generated from the label if name not supplied
            //     showHeader: false, // optional - Use the label as the header for this set of inputs
            //     fields: [
            //         {
            //             type: 'signature',
            //             label: 'Signature',
            //         },
            //     ]
            // },
        ],
        disabledFieldButtons: {
            break: ['edit'], // disables the remove butotn for text fields
            signature: ['edit'], // disables the remove butotn for text fields
        },
        templates,
        onSave: function (evt, formData) {

            var formRenderOpts = {
                dataType: 'xml',
                formData: formData,
                render: true
            };

            var renderedForm = $('<div>');
            renderedForm.formRender(formRenderOpts);
            renderedForm.html();
            $('#preview_form').append(renderedForm);
            // toggleEdit();
            // $('.render-wrap').formRender({ formData });
        },
    });
});