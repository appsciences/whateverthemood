import React from 'react';

import CsvDownloader from 'react-csv-downloader';
import {Button} from 'react-bootstrap';

//TODO submit modifications to CsvDownloader


class CsvDownloaderMod extends CsvDownloader {
    constructor(props) {
        super(props);
    }


    render(){
        const { children, text } = this.props;

        if (typeof children === 'undefined') {
            return (
                <button onClick={this.handleClick}>
                    {(() => {
                        if (text) {
                            return text;
                        }
                        return 'Download';
                    })()}
                </button>
            );
        }

        return (
            <span onClick={this.handleClick}>
            {children}
        </span>
        );
    }}


const ExportButton = ({filename, data}) => (
    <CsvDownloaderMod datas={data} filename={filename} separator=";">
        <Button>Export</Button>
    </CsvDownloaderMod>

);

export default ExportButton;