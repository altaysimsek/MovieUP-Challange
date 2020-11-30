import styles from "../../styles/Searchbox.module.scss";
import { useRouter } from "next/router";
import React, { useState } from "react";
function Searchbox() {
    const [searchBoxInput, setSearchBoxInput] = useState("");
    const [selectYear, setSelectYear] = useState("");
    const [selectCategory, setCategory] = useState("");
    const router = useRouter();

    const handleClick = (e) => {
        setSearchBoxInput("");
        if (searchBoxInput.trim() != "") {
            let queryObj = {name: searchBoxInput}
            if(selectYear != ""){
               queryObj = { name: searchBoxInput, year: selectYear }
            }
            router.push({
                pathname: "/search",
                query: queryObj,
            });
        }
    };
    let year = [];
    for (let i = 2020; i > 1900; i--) {
        year.push(i);
    }
    return (
        <div className={styles.searchbox}>
            <div className={styles.selectbox}>
                <select
                    id="years"
                    name="years"
                    onChange={(e) => setSelectYear(e.target.value)}
                >
                    <option value="" >
                        Year
                    </option>
                    {year.map((item) => (
                        <option value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div className={styles.selectbox}>
                <select
                    id="types"
                    name="types"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="" >
                        Type
                    </option>
                    <option value="Action">Action</option>
                    <option value="Sci-fi">Sci-fi</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Romantic">Romantic</option>
                </select>
            </div>
            <div className={styles.inputbox}>
                <input
                    type="text"
                    placeholder="Enter movie name here"
                    className="mr-5"
                    name="searchbox"
                    value={searchBoxInput}
                    onChange={(e) => setSearchBoxInput(e.target.value)}
                ></input>
                <i className="bx bx-search"></i>
            </div>

            <button className={styles.searchButton} onClick={handleClick}>
                <span>Search</span>
                <i className="bx bx-right-arrow-alt"></i>
            </button>
        </div>
    );
}

export default Searchbox;
