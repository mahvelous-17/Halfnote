function Mission({ textHeader, myMission }) {
    return (
        <div>
            <div className="text-center text-gray-600">
                <p className="text-2xl font-bold">{textHeader}</p>
                <p className="text-1xl">{myMission}</p>
            </div>
        </div>
    );
}


export default Mission;