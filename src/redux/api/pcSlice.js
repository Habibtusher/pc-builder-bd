import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    pc: {
        processor: {
            name: null,
            price: null,
            id: null,
            image: null
        },
        motherboard: {
            name: null,
            price: null,
            id: null,
            image: null
        },
        ram: {
            name: null,
            price: null,
            id: null,
            image: null
        },
        powerSupply: {
            name: null,
            price: null,
            id: null,
            image: null
        },
        storage: {
            name: null,
            price: null,
            id: null,
            image: null
        },
        monitor: {
            name: null,
            price: null,
            id: null,
            image: null
        },
        others: {
            name: null,
            price: null,
            id: null,
            image: null
        },
    },
    isLoading: false,
    isError: false,
    error: null,
};

export const pcSlice = createSlice({
    name: "pc",
    initialState,
    reducers: {
        setPc: (state, action) => {
            console.log("product naem",action.payload?.productName);
            if (action.payload.category === 'Processor') {
                    state.pc.processor.name = action.payload?.productName,
                    state.pc.processor.price = action.payload?.price,
                    state.pc.processor.id = action.payload?.id,
                    state.pc.processor.image = action.payload?.image
            }else if( action.payload.category ==='Motherboard'){
                state.pc.motherboard.name = action.payload?.productName,
                state.pc.motherboard.price = action.payload?.price,
                state.pc.motherboard.id = action.payload?.id,
                state.pc.motherboard.image = action.payload?.image
            
            }
            else if( action.payload.category ==='RAM'){
                state.pc.ram.name = action.payload?.productName,
                state.pc.ram.price = action.payload?.price,
                state.pc.ram.id = action.payload?.id,
                state.pc.ram.image = action.payload?.image
            }
            else if( action.payload.category ==='Power Supply Unit'){
                state.pc.powerSupply.name = action.payload?.productName,
                state.pc.powerSupply.price = action.payload?.price,
                state.pc.powerSupply.id = action.payload?.id,
                state.pc.powerSupply.image = action.payload?.image
            }
            else if( action.payload.category ==='Storage Device'){
                state.pc.storage.name = action.payload?.productName,
                state.pc.storage.price = action.payload?.price,
                state.pc.storage.id = action.payload?.id,
                state.pc.storage.image = action.payload?.image
            }
            else if( action.payload.category ==='Monitor'){
                state.pc.monitor.name = action.payload?.productName,
                state.pc.monitor.price = action.payload?.price,
                state.pc.monitor.id = action.payload?.id,
                state.pc.monitor.image = action.payload?.image
            }
            else if( action.payload.category ==='Others'){
                state.pc.others.name = action.payload?.productName,
                state.pc.others.price = action.payload?.price,
                state.pc.others.id = action.payload?.id,
                state.pc.others.image = action.payload?.image
            }

        },
    },
});
export const { setPc } = pcSlice.actions;
export default pcSlice.reducer;