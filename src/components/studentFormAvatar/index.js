import React from "react";
import PropTypes from "prop-types";

import Image from "../image";
import { getFirstLetters } from "../../utils";
import styles from "./studentFormAvatar.module.css";


const StudentFormAvatar = ({ name, img, setFieldValue }) => {
    return (
        <div className={styles.avatar}>
            <div className={styles.avatar__imgContainer}>
                <Image
                    firstLetters={getFirstLetters(name)}
                    width="82px"
                    height="82px"
                    src={img ? img : ''}
                    alt="avatar"
                    fontStyles={{ fontSize: '28px', lineHeight: '34px' }}
                />
            </div>
            <div className={styles.avatar__text}>
                <label>
                    <input id="img" type="file" accept="image/*" onChange={(event) => {
                        setFieldValue("img", {
                            file: event.target.files[0],
                            blobURL: URL.createObjectURL(event.target.files[0])
                        });
                    }} />
                    <span className={styles.avatar__button}>Сменить аватар</span>
                </label>
                <span className={styles.avatar__size}>500x500</span>
            </div>
        </div>
    );
};

StudentFormAvatar.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    setFieldValue: PropTypes.func
}

export default StudentFormAvatar;