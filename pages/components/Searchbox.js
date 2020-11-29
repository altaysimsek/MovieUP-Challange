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
            router.push({
                pathname: "/search",
                query: { name: searchBoxInput },
            });
            
        }
    };
    
    return (
        <div className={styles.searchbox}>
            <div className={styles.selectbox}>
                <select id="years" name="years" onChange={(e) => setSelectYear(e.target.value)}>
                    <option  value="" hidden>
                        Year
                    </option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
            </div>
            <div className={styles.selectbox}>
                <select id="types" name="types" onChange={(e) => setCategory(e.target.value)}>
                    <option value="" hidden>
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
