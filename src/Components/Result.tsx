import * as React from 'react';
import { IPerson, } from '../types';
import Person from './Person';

interface IResultProps {
  content: IPerson
}

interface IStateProps {
  showAllInfo: boolean;
}

class Result extends React.Component <IResultProps, IStateProps> {
  constructor(props: IResultProps) {
    super(props);

    this.state = {
      showAllInfo: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    const renderButton = (
      <li>
        <button onClick={this.handleClick}>{this.props.content.name}</button>
      </li>
    );

    return this.state.showAllInfo ? <Person onHide={this.handleClick} info={this.props.content} /> : renderButton;
  }

  private handleClick(e: React.MouseEvent) {
    e.preventDefault();

    this.setState({
      showAllInfo: !this.state.showAllInfo
    })
  };
}

export default Result;
