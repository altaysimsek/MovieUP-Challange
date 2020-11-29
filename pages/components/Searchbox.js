import styles from "../../styles/Searchbox.module.scss";

function Searchbox() {
    return (
        <div className={styles.searchbox}>
            <div className={styles.selectbox}>
                <select id="years" name="years">
                    <option value="" disabled selected hidden>
                        Year
                    </option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
            </div>
            <div className={styles.selectbox}>
                <select id="types" name="types">
                    <option value="" disabled selected hidden>
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
                ></input>
                <i class="bx bx-search"></i>
            </div>
            <button className={styles.searchButton}><span>
                Search
                </span><i class='bx bx-right-arrow-alt'></i></button>
        </div>
    );
}

export default Searchbox;
