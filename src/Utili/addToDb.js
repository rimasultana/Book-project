const getStoreReadList = () => {
    const storedListStr = localStorage.getItem("read-list");
    if (storedListStr) {
        return JSON.parse(storedListStr);
    }
    return [];
};

const addToStoreReadList = (id) => {
    const storeList = getStoreReadList();
    if (storeList.includes(id)) {
        console.log(id, "already exists");
    } else {
        storeList.push(id);
        const storedListStr = JSON.stringify(storeList);
        localStorage.setItem("read-list", storedListStr);
        console.log("Updated read-list in localStorage:", storeList);
    }
};

export { addToStoreReadList };