import { Popup } from "react-leaflet";
import React from "react";

export default function InfoBubble({ provider }) {
    
    function appendNotes(provider, lis) {
        let notes = provider.notes;
        notes = notes.replaceAll("&lt;", "<");
        notes = notes.replaceAll("&gt;", ">");
        notes.split("<br>").forEach((item, idx) => {
            lis.push(<li key={`note_${idx}`}>{item}</li>);
        });
    }

    function getTemplate(provider, className = "popup") {
        const lis = [];
        if (provider.phone1) {
            lis.push(<li key="phone1">{provider.phone1}</li>);
        }
        if (provider.phone2) {
            lis.push(<li key="phone2">{provider.phone2}</li>);
        }
        if (provider.address) {
            lis.push(<li key="address">{provider.address}</li>);
        }
        if (provider.email) {
            lis.push(<li key="email">{provider.email}</li>);
        }
        if (provider.website) {
            lis.push(
                <li key="website">
                    <a href={provider.website} target="_blank">
                        {provider.website}
                    </a>
                </li>
            );
        }
        if (provider.notes) {
            appendNotes(provider, lis);
            // lis.push(getNotes(provider));
        }
        return (
            <div className={className}>
                <h3>
                    <i className="fa-solid fa-children"></i> {provider.name}
                </h3>
                <ul>{lis}</ul>
            </div>
        );
    }
    return <Popup>{getTemplate(provider)}</Popup>;
}
