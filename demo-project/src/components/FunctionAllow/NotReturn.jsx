import React from 'react'


const NotReturn = () => {

    
    let arr = [
        { name: "Mouse", id: 1, brand: "MSI" },
        { name: "Keyboard", id: 2, brand: "Asus" },
        { name: "Monitor", id: 3, brand: "Dell" },
        { name: "setUp", id: 4, brand: "MSI" },
    ];

    function person(new_arr) {
        new_arr.map((item, index) => {
            console.log(index + ": " + item.id + " " + item.name + " " + item.brand );
        })
    }

    // console.log( person(arr) + 1)

  return (
    <div>NotReturn</div>
  )
}

export default NotReturn