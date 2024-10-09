import React from "react";
import "./ProviderInfo.css";
import { TfiEmail } from "react-icons/tfi";
import { FaPhone, FaRegCircleXmark } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

export default function ProviderInfo({ provider, className = "listing" }) {
    function getNotes() {
        let text = "";
        let notes = provider.notes;
        notes = notes.replaceAll("&lt;", "<");
        notes = notes.replaceAll("&gt;", ">");
        notes.split("<br>").forEach((item) => {
            text += item;
        });
        return <p>{text}</p>;
    }

    const lis = [];
    // if (provider.notes) {
    //     appendNotes(lis);
    // }
    if (provider.phone1) {
        lis.push(
            <li key="phone1">
                <FaPhone />
                {provider.phone1}{" "}
                {provider.phone2 ? ` or ${provider.phone2}` : ""}
            </li>
        );
    }
    if (provider.address) {
        lis.push(
            <li key="address">
                <TfiEmail />
                {provider.address}
            </li>
        );
    }
    if (provider.email) {
        lis.push(
            <li key="email">
                <MdAlternateEmail />
                {provider.email}
            </li>
        );
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
    return (
        <div className={className}>
            <h2>{provider.name}</h2>
            {provider.notes ? <p>{getNotes()}</p> : ""}
            <ul>{lis}</ul>
        </div>
    );
}
