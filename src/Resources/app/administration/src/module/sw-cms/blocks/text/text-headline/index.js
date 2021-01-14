import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'text-headline',
    label: 'sw-cms.blocks.text.textHeadline.label',
    category: 'text',
    component: 'sw-cms-block-text-headline',
    previewComponent: 'sw-cms-preview-text-headline',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        center: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                                <p class="headline-uppercase">Ein Messer fürs Leben</p>
                                <h3>Entdecken Sie Ihren scharfen Wegbeleiter</h3>
                                 <div class="svg-bottom">
                                <?xml version="1.0" encoding="UTF-8"?>
                                <svg width="20px" height="87px" viewBox="0 0 20 87" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <!-- Generator: Sketch 60.1 (88133) - https://sketch.com -->
                                    <title>Group</title>
                                    <desc>Created with Sketch.</desc>
                                    <g id="XS-&gt;-300px" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Service" transform="translate(-150.000000, -316.000000)" stroke="#EB6807">
                                            <g id="Group" transform="translate(150.000000, 317.000000)">
                                                <path d="M3.83333333,69.8333333 L3.83333333,82.1666667 L16.1666667,82.1666667 L16.1666667,69.8333333 L3.83333333,69.8333333 Z" id="Rectangle" transform="translate(10.000000, 76.000000) rotate(45.000000) translate(-10.000000, -76.000000) "></path>
                                                <line x1="10.0052429" y1="5.20417043e-16" x2="10.0052429" y2="67" id="Line-8" stroke-linecap="square"></line>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        `.trim()
                    }
                }
            }
        }
    }
});
