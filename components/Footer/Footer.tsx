/* eslint-disable @next/next/no-sync-scripts */
// Import the link props
import Link from 'next/link';
import styles from './footer.module.scss';
import { Box } from '@mui/material';

function Footer() {

    return (
        <footer id='header' className={styles.footer}>
            <div className={styles.container}>
                    <div>
                        <Box className={styles.box}>
                            LOGO PLACEHOLDER
                        </Box>
                        <Box className={styles.box}>
                            © 2022 Technology Bear. All rights reserved.
                        </Box>
                    </div>
                    <div>
                        <Box className={styles.box}>
                            <ul className={styles.ul}>
                                <li className={styles.li}>
                                    Affiliates
                                </li>
                                <li className={styles.li}>
                                    FAQ
                                </li>
                            </ul>
                        </Box>
                        <Box className={styles.box}>
                            <ul className={styles.ul}>
                                <li className={styles.li}>
                                <script src="https://platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script>
                                <script type="IN/FollowCompany" data-id="79875648"></script>
                                </li>
                            </ul>
                        </Box>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;