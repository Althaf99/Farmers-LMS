package com.farmers.lms.Courses.dto;

import java.util.ArrayList;
import java.util.List;

public class Units {

    private String unitName;

    private String videoLink;

    private List<PdfFile> pdfFile = new ArrayList<>();

    public void setPdfFile(List<PdfFile> pdfFile) {
        this.pdfFile = pdfFile;
    }

    public List<PdfFile> getPdfFile() {
        return pdfFile;
    }


    public void setUnitName(String unitName) {
        this.unitName = unitName;
    }

    public String getUnitName() {
        return unitName;
    }

    public String getVideoLink() {
        return videoLink;
    }

    public void setVideoLink(String videoLink) {
        this.videoLink = videoLink;
    }
}
