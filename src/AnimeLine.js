import React from 'react';

const AnimeLine = ({title, provider, link}) => {

    return (
        <tr>
            <td>
                {title}
            </td>
            <td>
                {provider}
            </td>
            <td className="text-center">
                {link ?
                    <a href={link} target="blank">
                        <span className="sr-only">{title}</span>
                        <i className="fas fa-external-link-alt fa-xs"/>
                    </a> :
                    "N/A"
                }
            </td>
        </tr>
    );
}

export default AnimeLine;