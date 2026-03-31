import HoudiniTxt from "../components/HoudiniTxt";

function Mission({ textHeader, myMission }) {
    return (
        <div >
            <div className="text-center">
                <HoudiniTxt>
                    <h1 className="font-bold tracking-tight m-0">
                        {textHeader}
                    </h1>
                </HoudiniTxt>

                <HoudiniTxt>
                    <h2 className="text-xl opacity-90 italic m-0 leading-tight">
                        {myMission}
                    </h2>
                </HoudiniTxt>
            </div>
        </div>
    );
}

export default Mission;