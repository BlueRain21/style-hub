
export const initialState = {
    userData :[],
    categoryData: [],
    productData: [],
    countryProductSales: [],
}


const dataReducer = (state=initialState, action)=>{
    switch(action.type){
        case "UPDATE USER DATA":
            return {...state, userData:action.payload};
        case "UPDATE CATEGORY DATA":
            return {...state, categoryData: action.payload};
        case "UPDATE PRODUCT DATA":
            const arr = action.payload.map(a=> a.salesRecord);
            let r1 = [];
            for(var r of arr){
                r1.push(...r);
            }
            let r2 = r1.map(a=> a.country);
            let r3 = r2.filter((a,i)=> i === r2.indexOf(a));

            let r4 = r3.map(a=>{
                let b = r1.filter(c=> c.country == a);
                // console.log(b);
                return {id:a, value:b.reduce((a,e)=> a+e.quantitySold, 0)};
            });
            return {...state, productData: action.payload, countryProductSales: r4};
        default:
            return state;
    }
}

export default dataReducer; 