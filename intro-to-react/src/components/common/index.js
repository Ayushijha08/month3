function CommonComponent({comp, setname}) {
    return (
        <form>
            <input type="text" placeholder="Enter something..." onChange={(e) => setname(e.target.value)} />
            <p>Chil comp; {comp}</p>
            {/* <button>Submit</button> */}
        </form>
    );
}

export default CommonComponent;