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
import { faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLink';

/** REGULAR ICONS (PREFIX: far) */

/** PRO LIGHT ICONS (PREFIX: fal) */

/** BRAND ICONS (PREFIX: fab) */
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';

export default {
  init: () =>
    library.add(
      faFileDownload,
      faExternalLink,
      faGithubSquare,
      faTwitterSquare,
      faInstagram,
      faStackOverflow,
      faLinkedin,
      faFacebookSquare
    ),
};

// <FontAwesomeIcon icon={item.icon as any} fixedWidth={true} />
