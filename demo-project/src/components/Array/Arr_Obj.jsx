
const Arr_Obj = () => {

    let arr = [
        { name: "Mouse", id: 1, brand: "MSI" },
        { name: "Keyboard", id: 2, brand: "Asus" },
        { name: "Monitor", id: 3, brand: "Dell" },
        { name: "setUp", id: 4, brand: "MSI" },
    ];

    arr.forEach((item, index) => {
        if(item.brand ==  "Asus"){
            console.log(item.name + " " + item.id + " " + item.brand);
        }else if(item.name ==  "Monitor"){
            console.log(item.name + " " + item.id + " " + item.brand);
        }else{
            console.log("not found!");
        } 
    });

    // for(let i = 0; i < arr.length; i++){
    //     console.log(arr[i].name + " " + arr[i].id + " " + arr[i].brand);
    // }

    // arr.map(item => console.log(item));
    return (
        <>
            {
                // arr.forEach((item, index) => {
                //     if (item.brand == "Asus") {
                //         console.log(item.name + " " + item.id + " " + item.brand);
                //     } else if (item.brand == "Dell") {
                //         console.log(item.name + " " + item.id + " " + item.brand);
                //     } else {
                //         console.log("not found!");
                //     }
                // })
            }
        </>
    )
}

export default Arr_Obj