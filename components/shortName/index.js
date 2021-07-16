import React from 'react'

export const ShortName = (props) => {
    const styles = {
        container: {
            width: props.x ? props.x : 50,
            height: props.y ? props.y : 50,
            background: "#e84545c5",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%"
        },
        text: {
            fontSize: props.size ? props.size : 20,
            fontWeight: 600,
            color: "#fff",
            margin: 0
        }
    }

    let name
    const array = props.name.split(' ')
    if (array.length >= 2) {
        name = array[0].slice(0, 1) + array[1].slice(0, 1)
    } else {
        name = array[0].slice(0, 1)
    }

    return (
        <div style={styles.container}>
            <h5 style={styles.text}>{name ? name : null}</h5>
        </div>
    )
}