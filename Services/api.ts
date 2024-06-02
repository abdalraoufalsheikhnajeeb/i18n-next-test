import * as Constant from './constant';

// Define the type for the callback function


// Define the API response structure
export interface ApiResponse<T> {
	Status: boolean;
	Code: number;
	Data: T;
	Message: string | null;
	TotalCount: number;
}

// Define the Vacancy type based on the response structure
export interface Vacancy {
	Id: number;
	Code: string;
	Image: string | null;
	Active: boolean | null;
	StartDate: string;
	EndDate: string;
	VacancyName: {
		Id: number;
		Title: string;
		JobDesciption: string;
		Requirment: string;
		Responsibilities: string;
		VacancyId: number;
		LanguageId: number;
		Language: string | null;
		Vacancy: string | null;
	};
}

// Define the fetchDataWebResponse function
type AcceptedLanguage = '1' | '2';

type Callback<T> = (response: ApiResponse<T>) => void;

export const fetchDataWebResponse = async <T>(
	acceptedLanguage: '1' | '2',
	url: string,
	queryString: string,
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD',
	callback: Callback<T>,
	data: any = null,
	is_json: boolean = false
): Promise<void> => {
	const headers: { [key: string]: string | null } = {
		'Accept-Language': acceptedLanguage,
		'Content-type': is_json ? 'application/json' : '',
		Authorization: null,
	};

	const response = await fetch(url + '?' + queryString, {
		method: method,
		body: method === 'GET' || method === 'HEAD' ? null : is_json ? JSON.stringify(data) : data,
		headers: headers as HeadersInit,
	});

	if (response.status === 200) {
		const responseData: ApiResponse<T> = await response.json();
		callback(responseData);
	} else {
		if (response.status === 401) {
			localStorage.clear();
			sessionStorage.clear();
			window.location.assign('/authentication/sign-in');
		} else {
			console.error(`Error: ${response.statusText}`);
		}
	}
};
// Define the getVacancies function
export const getVacancies = async (
	acceptedLanguage: '1' | '2',
	Start: number | null,
	Count: number | null,
	callback: (response: ApiResponse<Vacancy[]>) => void
): Promise<void> => {
	let queryString = '';

	if (Count != null) {
		queryString += `Count=${Count}&`;
	}
	if (Start != null) {
		queryString += `Start=${Start}&`;
	}

	await fetchDataWebResponse<Vacancy[]>(
		acceptedLanguage,
		Constant.get_vacancies, // Adjust the URL according to your structure
		queryString,
		'GET',
		callback
	);
};

// Define other service functions with consistent typing and string conversion
export interface Service {
	Id: number;
	ServiceCategoryId: number;
	Code: string;
	Link: string | null;
	ServiceCategory: {
		Id: number;
		Code: string;
		CategoryName: {
			Id: number;
			Name: string;
			LanguageId: number;
		};
		Names: string[];
	};
	ServiceName: {
		Id: number;
		Name: string;
		LanguageId: number;
		Description: string | null;
	};
	Images: string[];
}

export const getServices = async (
	acceptedLanguage: '1' | '2',
	Start: number | null,
	Count: number | null,
	callback: (response: ApiResponse<Service[]>) => void
): Promise<void> => {
	let queryString = '';

	if (Count != null) {
		queryString += `Count=${Count}&`;
	}
	if (Start != null) {
		queryString += `Start=${Start}&`;
	}

	await fetchDataWebResponse<Service[]>(acceptedLanguage, Constant.get_services_url, queryString, 'GET', callback);
};


export interface WorkShopName {
	Id: number;
	Name: string;
	Description: string;
	WorkShopId: number;
	LanguageId: number;
	Language: Language | null;
	WorkShop: any | null; // Adjust this type if you have more information about what it should be
}

export interface WorkShop {
	Id: number;
	Code: string;
	Images: string[];
	Date: string;
	Link: string;
	Names: WorkShopName;
}
export const getWorkShop = async (
	acceptedLanguage: '1' | '2',
	Start: number | null,
	Count: number | null,
	callback: (response: ApiResponse<WorkShop[]>) => void
): Promise<void> => {
	let queryString = '';

	if (Count != null) {
		queryString += `Count=${Count}&`;
	}
	if (Start != null) {
		queryString += `Start=${Start}&`;
	}

	await fetchDataWebResponse<WorkShop[]>(
		acceptedLanguage,
		Constant.get_WorkShop_url,
		queryString,
		'GET',
		callback
	);
};

export interface Project {
	Id: number;
	Code: string;
	Images: string[];
	Date: string;
	Link: string | null;
	ProjectName: {
		Id: number;
		Name: string;
		LanguageId: number;
		Description: string;
		Language: {
			Id: number;
			Code: string;
			Name: string;
		};
	};
}
export const getProjects = async (
	acceptedLanguage: '1' | '2',
	Start: number | null,
	Count: number | null,
	callback: (response: ApiResponse<Project[]>) => void
): Promise<void> => {
	let queryString = '';

	if (Count != null) {
		queryString += `Count=${Count}&`;
	}
	if (Start != null) {
		queryString += `Start=${Start}&`;
	}

	await fetchDataWebResponse<Project[]>(acceptedLanguage, Constant.get_projects_url, queryString, 'GET', callback);
};

export interface Language {
	Id: number;
	Code: string;
	Name: string;
}

export interface ProjectName {
	Id: number;
	Name: string;
	LanguageId: number;
	Description: string;
	Language: Language;
}

export interface ProjectByDate {
	Id: number;
	Code: string;
	Images: string[];
	Date: string;
	Link: string | null;
	ProjectName: ProjectName;
}

export interface ProjectsByYear {
	[year: string]: ProjectByDate[];
}

// Example usage of ApiResponse for projects by date
export type ProjectsByDateResponse = ApiResponse<ProjectsByYear>;

export const getProjectsByDate = async (
	acceptedLanguage: AcceptedLanguage,
	Start: number | null,
	Count: number | null,
	callback: (response: ApiResponse<ProjectsByYear>) => void
): Promise<void> => {
	let queryString = '';

	if (Count != null) {
		queryString += `Count=${Count}&`;
	}
	if (Start != null) {
		queryString += `Start=${Start}&`;
	}

	await fetchDataWebResponse<ProjectsByYear>(
		acceptedLanguage,
		Constant.get_projects_by_date_url,
		queryString,
		'GET',
		callback
	);
};
