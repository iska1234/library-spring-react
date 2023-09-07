import {Carrousel} from './components/Carrousel'
import ExploreTopBooks from './components/ExploreTopBooks'
import { Heros } from './components/Heros'
import { LibraryServices } from './components/LibraryServices'
 
 export const HomePage = () => {
   return ( 
       <>
            <ExploreTopBooks/>
            <Carrousel/>
            <Heros/>
            <LibraryServices/>
       </>
   )
 }
 