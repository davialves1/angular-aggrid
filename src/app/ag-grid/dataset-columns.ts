const dataSetColumns: DataSetHttpResponse[] = [
  { field: 'id', sortable: true, filter: true, checkboxSelection: true },
  { field: 'first_name', sortable: true, filter: true },
  { field: 'last_name', sortable: true, filter: true },
  { field: 'email', sortable: true, filter: true },
  { field: 'gender', sortable: true, filter: true },
  { field: 'ip_address', sortable: true, filter: true },
  { field: 'car_model', sortable: true, filter: true },
  { field: 'city', sortable: true, filter: true },
  { field: 'car_vin', sortable: true, filter: true },
  { field: 'isbn', sortable: true, filter: true },
  { field: 'country_code', sortable: true, filter: true },
  { field: 'frequency', sortable: true, filter: true },
  { field: 'scientific_name', sortable: true, filter: true },
  { field: 'currency', sortable: true, filter: true },
  { field: 'buzzword', sortable: true, filter: true },
  { field: 'company_name', sortable: true, filter: true },
];

export default dataSetColumns;

export interface DataSetHttpResponse {
  field: string;
  sortable: boolean;
  filter: boolean;
  checkboxSelection?: boolean;
}

export interface DataSetColumns {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  car_model: string;
  city: string;
  car_vin: string;
  isbn: string;
  country_code: string;
  frequency: string;
  scientific_name: string;
  currency: string;
  buzzword: string;
  company_name: string;
}
