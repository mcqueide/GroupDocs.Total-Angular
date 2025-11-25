import {HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class Api {
  public static VIEWER_APP = '/viewer';
  public static SIGNATURE_APP = '/signature';
  public static ANNOTATION_APP = '/annotation';
  public static SEARCH_APP = '/search';
  public static EDITOR_APP = '/editor';
  public static COMPARISON_APP = '/comparison';
  public static CONVERSION_APP = '/conversion';
  public static METADATA_APP = '/metadata';
  public static PARSER_APP = '/parser';
  public static VIEWER_DEFAULT_API_ENDPOINT = window.location.protocol + "//" + window.location.host + window.location.pathname;
  public static ANNOTATION_DEFAULT_API_ENDPOINT = window.location.protocol + "//" + window.location.host + window.location.pathname;
  public static LOAD_FILE_TREE = '/loadFileTree';
  public static LOAD_CONFIG = '/loadConfig';
  public static LOAD_DOCUMENT_DESCRIPTION = '/loadDocumentDescription';
  public static LOAD_DOCUMENT_PAGE = '/loadDocumentPage';
  public static LOAD_DOCUMENT_PROPERTIES = '/loadProperties';
  public static LOAD_DOCUMENT_PROPERTIES_NAMES = '/loadPropertiesNames';
  public static SAVE_PROPERTY = '/saveProperty';
  public static REMOVE_PROPERTY = '/removeProperty';
  public static ROTATE_DOCUMENT_PAGE = '/rotateDocumentPages';
  public static UPLOAD_DOCUMENTS = '/uploadDocument';
  public static DOWNLOAD_DOCUMENTS = '/downloadDocument';
  public static DOWNLOAD_ANNOTATED = '/downloadAnnotated';
  public static LOAD_PRINT = '/loadPrint';
  public static LOAD_PRINT_PDF = '/printPdf';
  public static LOAD_THUMBNAILS = '/loadThumbnails';
  public static LOAD_FORMATS = '/loadFormats';
  public static SAVE_FILE = '/saveFile';
  public static CREATE_FILE = '/createFile';
  public static COMPARE_FILES = '/compare';
  public static CONVERT_FILE = '/convert';
  public static DELETE_SIGNATURE_FILE = '/deleteSignatureFile';
  public static REMOVE_FROM_INDEX = '/removeFromIndex';
  public static GET_FILE_STATUS = '/getFileStatus';
  public static SAVE_OPTICAL_CODE = '/saveOpticalCode';
  public static SAVE_TEXT = '/saveText';
  public static SAVE_IMAGE = '/saveImage';
  public static SAVE_STAMP = '/saveStamp';
  public static SIGN = '/sign';
  public static DOWNLOAD_SIGNED = '/downloadSigned';
  public static LOAD_SIGNATURE_IMAGE = '/loadSignatureImage';
  public static ANNOTATE = '/annotate';
  public static SEARCH = '/search';
  public static PARSE = '/parse';
  public static ADD_FILES_TO_INDEX = '/addFilesToIndex';
  public static CLEAN_METADATA = '/clean';
  public static EXPORT_METADATA = '/export';

  public static httpOptionsJson = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  public static httpOptionsJsonResponseTypeBlob = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    responseType: 'blob' as 'blob'
  };
}

@Injectable()
export class ConfigService {

  private _viewerApiEndpoint: string;
  private _annotationApiEndpoint: string;

  constructor() {
    this.viewerApiEndpoint = Api.VIEWER_DEFAULT_API_ENDPOINT;
    this.annotationApiEndpoint = Api.ANNOTATION_DEFAULT_API_ENDPOINT;
  }

  set viewerApiEndpoint(url: string) {
    this._viewerApiEndpoint = url && url.trim().endsWith('/') ? url.substring(0, url.length - 1) : url;
  }
  set annotationApiEndpoint(url: string) {
    this._annotationApiEndpoint = url && url.trim().endsWith('/') ? url.substring(0, url.length - 1) : url;
  }

  get viewerApiEndpoint() {
    return this._viewerApiEndpoint;
  }

  get annotationApiEndpoint() {
    return this._annotationApiEndpoint;
  }

  getViewerConfigEndpoint(app) {
    return (this.viewerApiEndpoint.endsWith(app) ? this.viewerApiEndpoint : this.viewerApiEndpoint + app) + Api.LOAD_CONFIG;
  }

  getAnnotationConfigEndpoint(app) {
    return (this.annotationApiEndpoint.endsWith(app) ? this.annotationApiEndpoint : this.annotationApiEndpoint + app) + Api.LOAD_CONFIG;
  }

  getViewerApiEndpoint() {
    return this._viewerApiEndpoint.endsWith(Api.VIEWER_APP) ? this._viewerApiEndpoint : this._viewerApiEndpoint + Api.VIEWER_APP;
  }

  getAnnotationApiEndpoint() {
    return this._annotationApiEndpoint.endsWith(Api.ANNOTATION_APP) ? this._annotationApiEndpoint : this._annotationApiEndpoint + Api.ANNOTATION_APP;
  }

}
