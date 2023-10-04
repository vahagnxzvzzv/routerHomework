import React from "react";
import albums from "../../db/albums";

function Albums() {

    let albumsMaping = albums.map((album) => {
        return (
            <div>
                <li>{album.userId}</li>
                <li>{album.id}</li>
                <li>{album.title}</li>
            </div>
        )
    })

    return (
        <div>
            {albumsMaping}
        </div>
    )
}

export default Albums