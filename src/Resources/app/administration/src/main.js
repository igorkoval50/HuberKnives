import './module/sw-cms/blocks/text-image/image-text-reversed';
import './module/sw-cms/blocks/text-image/image-text-custom';
import './module/sw-cms/blocks/text/text-four';
import './module/sw-cms/blocks/text/text-two';
import './module/sw-cms/blocks/text/text-one';
import './module/sw-cms/blocks/text/text-headline';

import deDE from './module/sw-cms/snippet/de-DE.json';
import enGB from './module/sw-cms/snippet/en-GB.json';

Shopware.Locale.extend('de-DE', deDE);
Shopware.Locale.extend('en-GB', enGB);
