/**
 * Library for all icons used in library
 * Only icons explicitly imported will be used in application
 *
 * To import an entire library:
 * import brands from '@fortawesome/fontawesome-free-brands'
 * fontawesome.library.add(brands);
 *
 *
 */

import { library } from '@fortawesome/fontawesome-svg-core';

/** SOLID ICONS (PREFIX: fas (default)) */
import { faFileDownload } from '@fortawesome/pro-solid-svg-icons/faFileDownload';

/** REGULAR ICONS (PREFIX: far) */

/** PRO LIGHT ICONS (PREFIX: fal) */

/** BRAND ICONS (PREFIX: fab) */
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow';

export default {
  init: () =>
    library.add(
      faFileDownload,
      faGithub,
      faTwitter,
      faInstagram,
      faStackOverflow
    ),
};

// <FontAwesomeIcon icon={item.icon as any} fixedWidth={true} />
