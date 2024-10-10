import React from "react";
import "./ProviderInfo.css";
import { TfiEmail } from "react-icons/tfi";
import { FaPhone, FaRegCircleXmark } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

export default function ProviderInfo({
    provider,
    setActiveMarkerById,
    activeMarker = null,
    className = "listing",
}) {
    function getNotes() {
        let text = "";
        let notes = provider.notes;
        notes = notes.replaceAll("&lt;", "<");
        notes = notes.replaceAll("&gt;", ">");
        notes.split("<br>").forEach((item) => {
            text += item;
        });
        return <>{text}</>;
    }

    function getPhoneNumbers() {
        return (
            <li key="phone1">
                <FaPhone />
                {provider.phone1}{" "}
                {provider.phone2 ? ` or ${provider.phone2}` : ""}
            </li>
        );
    }

    function getAddresses() {
        return (
            <li key="address">
                <TfiEmail />
                <span>
                    {provider.address}
                    {provider.email ? (
                        <>
                            <br />
                            {provider.email}
                        </>
                    ) : (
                        ""
                    )}
                </span>
            </li>
        );
    }

    const lis = [];
    if (provider.phone1) {
        lis.push(getPhoneNumbers());
    }
    if (provider.address || provider.address) {
        lis.push(getAddresses());
    }
    if (provider.website) {
        lis.push(
            <li key="website">
                <TbWorld />
                <a href={provider.website} target="_blank">
                    website
                </a>
            </li>
        );
    }
    if (provider.accepts_ccap) {
        if (provider.accepts_ccap.toLowerCase() === "yes") {
            <IoIosCheckmarkCircle />;
            lis.push(
                <li key="ccap">
                    <IoIosCheckmarkCircle />
                    Accepts CCAP
                </li>
            );
        } else if (provider.accepts_ccap.toLowerCase() === "no") {
            <IoIosCheckmarkCircle />;
            lis.push(
                <li key="ccap">
                    <FaRegCircleXmark />
                    Does not accept CCAP
                </li>
            );
        }
    }
    const isActive = activeMarker && activeMarker.id === provider.id;
    const highlightClass = isActive ? " active" : "";
    return (
        <div className={className + highlightClass} id={provider.id}>
            <div>
                <h2>{provider.name}</h2>
                {provider.notes ? <p className="notes">{getNotes()}</p> : ""}
                <ul className="details">{lis}</ul>
            </div>
            <div>
                {className == "listing" ? (
                    <button
                        className="transparent-button"
                        onClick={(ev) => {
                            setActiveMarkerById(provider.id);
                            // markers[provider.id].current.openPopup();
                        }}
                    >
                        show
                    </button>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
