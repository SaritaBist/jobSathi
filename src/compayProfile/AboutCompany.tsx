import { companyData } from "../Data/Company.tsx";

interface Company {
    Industry: string;
    Specialties: string[];
    Size: string;
    Headquarters: string;
    Website: string;
    Overview: string;
}

const AboutCompany = () => {
    const company: Company = companyData;

    return (
        <div className="mt-5">
            {Object.keys(company).map((key, index) => {
                const companyKey = key as keyof Company;

                return (
                    <div key={index} className="mt-5">
                        <div className="text-xl font-semibold">{key}</div>
                        {companyKey !== "Website" && (
                            <div className="text-sm text-justify">
                                {companyKey !== "Specialties" ? (
                                    company[companyKey]
                                ) : (
                                    (company[companyKey] as string[]).map((item) => (
                                        <span key={item}>&bull; {item}</span>
                                    ))
                                )}
                            </div>
                        )}
                        {companyKey === "Website" && (
                            <div className="text-sm text-justify text-bright-sun-200">
                                <a href={company[companyKey]} target="_blank">
                                    {company[companyKey]}
                                </a>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default AboutCompany;
