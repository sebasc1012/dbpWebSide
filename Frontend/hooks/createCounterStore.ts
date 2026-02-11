import { createStore } from "zustand";

interface counterActions {
    increasePopulation: ()=> void ;
    decresePopulation: ()=> void ;
}
type CounterState = {
    increment:number
}
type CounterStore = counterActions & CounterState

const defaultCount: CounterState = {
    increment: 0
}

export const createCounterStore = ((initState: CounterState = defaultCount )=>  {
    return createStore<CounterStore>()((set)=> ({
        ...initState,
        increasePopulation : ()=> set((state)=> ({increment : state.increment + 1}) ),
        decresePopulation : ()=> set((state)=> ({increment: state.increment - 1})),
        resetPopulation : ()=> set(()=> ({increment: 0})),
    }))
})