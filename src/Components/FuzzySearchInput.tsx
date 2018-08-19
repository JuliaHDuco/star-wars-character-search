import * as React from 'react';
import { IPerson, IEvent } from '../types';
import Results from './Results';

interface IFuzzySearchInputProps {
  className?: string;
}

interface IStateProps {
  results?: IPerson[];
  searchString: string;
}

class FuzzySearchInput extends React.Component<IFuzzySearchInputProps, IStateProps> {
  constructor(props: IFuzzySearchInputProps) {
    super(props);

    this.state = {
      results: [],
      searchString: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.search = this.search.bind(this);
  }

  public componentDidUpdate(prevProps: {}, prevState: IStateProps) {
    if (this.state.searchString !== prevState.searchString) {
      this.search();
    }
  }

  public render() {
    const results = this.state.results;
    return (
      <div>
        <input type='text' value={this.state.searchString} onChange={this.handleOnChange}/>
        {results && this.state.searchString.length > 0 ? <Results results={results} /> : null}
      </div>
    );
  }

  private async search() {
    const response = await fetch(`https://swapi.co/api/people/?search=${this.state.searchString}`);
    const json = await response.json();

    this.setState({results: [...json.results]});
  }

  private handleOnChange(event: IEvent) {
    if (event.target) {
      this.setState({searchString: event.target.value})
    }
  }
}

export default FuzzySearchInput;
