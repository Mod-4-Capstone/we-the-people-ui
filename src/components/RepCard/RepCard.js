import React, {useState} from "react"
import "./RepCard"
import "./RepCard.css"

const RepCard = ({repData}) => {

  return (
    <div className="rep-card">
      <div className="bio-info">
        <div>
          <img src={repData.attributes.biography.photo} className="rep-img"/>
        </div>
        <div className="bio-text-container">
          <p className="bio-text">{repData.attributes.biography.name}</p>
          <p className="bio-text">State: {repData.attributes.biography.district}</p>
          <p className="bio-text">Age: {repData.attributes.biography.age}</p>
          <p className="bio-text">Gender: {repData.attributes.biography.gender}</p>
          <p className="bio-text">Years in office: {repData.attributes.biography.years_in_office}</p>
          <p className="bio-text">Up for re-election in: {repData.attributes.biography.next_election}</p>
          <p className="rep-match">90% match with your beliefs</p>
        </div>
      </div>
      <div className="rep-issues-container">
        <details className="details-arrow">
          <summary>Abortion: You match 40% on this issue </summary>
          <p className="rep-issues">Planned Parenthood: {repData.attributes.rating.planned_parenthood}%</p>
        </details>
        <details className="details-arrow">
          <summary> Budget, Spending: You match 40% on this issue </summary>
          <p className="rep-issues"> Americans for Prosperity: {repData.attributes.rating.americans_for_prosperity}%</p>
        </details>
        <details className="details-arrow">
          <summary>Civil Liberties You match 40% on this issue </summary>
          <p className="rep-issues"> ACLU: {repData.attributes.rating.aclu}%</p>
        </details>
        <details className="details-arrow">
          <summary>Campaign Finance:  You match 40% on this issue </summary>
          <p className="rep-issues"> End Citizens United: {repData.attributes.rating.end_citizens_united}%</p>
        </details>
        <details className="details-arrow">
          <summary>Criminal Justice:  You match 40% on this issue </summary>
          <p className="rep-issues"> Nat'l Assoc. of Police Org: {repData.attributes.rating.national_association_of_police}%</p>
        </details>
        <details className="details-arrow">
          <summary>Environment: You match 40% on this issue </summary>
          <p className="rep-issues"> Nat'l Parks Conservation Assoc.: {repData.attributes.rating.national_parks_conservation}%</p>
        </details>
        <details className="details-arrow">
          <summary>Guns: You match 40% on this issue </summary>
          <p className="rep-issues"> NRA: {repData.attributes.rating.nra}%</p>
        </details>
        <details className="details-arrow">
          <summary>Immigration: You match 40% on this issue </summary>
          <p className="rep-issues"> NumbersUSA: {repData.attributes.rating.numbers_usa}%</p>
        </details>
        <details className="details-arrow">
          <summary>Marijuana: You match 40% on this issue </summary>
          <p className="rep-issues">  Nat'l Cannabis Industry Assoc: {repData.attributes.rating.norml}%</p>
        </details>
      </div>
    </div>
   );
}

export default RepCard;
