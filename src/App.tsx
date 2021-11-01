import "./style/global.scss";
import {RepositoryList} from "./components/RepositoryList";
import './style/repositories.scss';

export function App(){
    return (
        <div>
            <>
                <RepositoryList></RepositoryList>

            </>
        </div>
    );
}