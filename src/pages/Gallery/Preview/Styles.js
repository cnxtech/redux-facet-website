import styled from 'styled-components';
import theme from 'theme';

export default styled.div`
  margin: 8px 0;

  button {
    background: none;
    border: 1px solid ${theme.get('colors.text.light')};
    padding: 6px 10px;
    border-radius: 4px;
    margin: auto 0;
    cursor: pointer;
    transition: 0.2s all ease;

    &:hover,
    &:active,
    &:focus {
      outline: none;
      border-color: ${theme.get('colors.text.default')};
    }

    &:disabled {
      color: ${theme.get('colors.text.light')};
      border-color: transparent;
    }
  }

  select, input {
    padding: 4px;
    line-height: 18px;
    background: transparent;
    font-size: 14px;
    display: inline-block;
    border: 1px solid ${theme.get('colors.text.light')};
  }

  h3 {
    text-transform: uppercase;
    font-weight: bold;
  }

  .View {
    padding: 12px;
    background: ${theme.get('colors.background.dimTransparent')};

    .View--content {
      margin: 8px auto;
    }
  }

  .Alerts {
    margin: 12px auto;

    .Alert {
      border: 1px solid ${theme.get('colors.text.default')};
      margin: 2px auto;
      background: ${theme.get('colors.background.transparent')};
      color: ${theme.get('colors.text.default')};
      padding: 4px;
      font-size: 14px;
      display: flex;
      flex-direction: row;

      & > * {
        flex: 1;
        margin: auto;
      }

      .Alert--dismiss {
        flex: 0 0 auto;
      }
    }
  }

  .ListView {
    .ListView--items {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .ListItem {
        width: 64px;
        height: 64px;
        line-height: 64px;
        text-align: center;
        background: ${theme.get('colors.background.dim')};
        margin: 4px;
      }
    }
  }

  .Pagination {
    .Pagination--display {
      margin: auto 8px;
    }
  }

  .Filters {
    .Filters--list {
      margin: 0;
      padding: 8px;

      .Filter {
        list-style-type: none;

        button {
          margin-left: 12px;
        }
      }
    }

    .FilterCreator {
      select, input {
        margin: auto 4px;
      }
    }
  }

  .SortControls {
    button {
      margin: auto 4px;
    }
  }
`;
