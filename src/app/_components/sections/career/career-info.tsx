interface CompanyInfoProps {
  companyName: string;
  companySubName: string;
  period: string;
}

export default function CompanyInfo({ companyName, companySubName, period }: CompanyInfoProps) {
  return (
    <div className="flex flex-col">
      <div className="text-body-medium">{companyName}</div>
      <div className="text-body-small">{companySubName}</div>
      <div className="text-detail-large">{period}</div>
    </div>
  );
}
