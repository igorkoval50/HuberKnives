import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'text-headline-top',
    label: 'sw-cms.blocks.text.textHeadlineTop.label',
    category: 'text',
    component: 'sw-cms-block-text-headline-top',
    previewComponent: 'sw-cms-preview-text-headline-top',
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
                                <div class="svg-top">
                <?xml version="1.0" encoding="UTF-8"?>
                <svg width="62px" height="111px" viewBox="0 0 62 111" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 60.1 (88133) - https://sketch.com -->
                    <title>Group 8</title>
                    <desc>Created with Sketch.</desc>
                    <g id="XS-&gt;-300px" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Landing" transform="translate(-129.000000, -2860.000000)" fill="#EB6807">
                            <g id="Group-8" transform="translate(129.000000, 2860.000000)">
                                <path d="M61.10255,24.6709977 L61.10255,53.5679977 L46.0003833,68.6588349 L46.0003833,110.350091 L46.8614944,110.350091 L46.8614944,69.0150674 L61.9636611,53.9242302 L61.9636611,24.6709977 L61.10255,24.6709977 Z M-0.000172222222,24.6709977 L-0.000172222222,53.9242302 L15.1028556,69.0150674 L15.1028556,110.350091 L15.9639667,110.350091 L15.9639667,68.6588349 L0.860938889,53.5679977 L0.860938889,24.6709977 L-0.000172222222,24.6709977 Z" id="Fill-1"></path>
                                <polygon id="Fill-2" points="46.0777972 47.7561581 38.6326306 34.2150186 38.6386583 34.2115767 31.1719639 20.6317163 23.4245472 34.2055535 24.1737139 34.6323442 31.1581861 22.3922279 37.8826028 34.6228791 37.8774361 34.6263209 44.6233806 46.895693 30.8869361 46.895693 17.1659917 46.895693 24.1659639 34.6323442 23.4176583 34.2055535 15.6831583 47.7561581 30.8869361 47.7561581"></polygon>
                                <polygon id="Fill-3" points="30.6159444 12.9078372 31.4770556 12.9078372 31.4770556 0.000860465116 30.6159444 0.000860465116"></polygon>
                                <polygon id="Fill-4" points="15.9615556 21.8530605 6.70461111 12.6030605 6.09580556 13.2114093 15.35275 22.4614093"></polygon>
                                <polygon id="Fill-5" points="55.1867167 12.6703488 46.0641056 21.7852558 46.6729111 22.3936047 55.7955222 13.2786977"></polygon>
                                <polygon id="Fill-6" points="38.274925 66.0474093 38.274925 110.350177 39.1360361 110.350177 39.1360361 66.4036419 54.2872861 51.2646186 53.6776194 50.6562698"></polygon>
                                <polygon id="Fill-7" points="7.750775 51.2645326 22.9011639 66.4035558 22.9011639 110.350091 23.762275 110.350091 23.762275 66.0473233 8.35958056 50.6570442"></polygon>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <h2>Handgeschmiedet mit Seele und Charakter.</h2>
                        `.trim()
                    }
                }
            }
        }
    }
});
