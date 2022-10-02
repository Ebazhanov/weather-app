type Title = {
  title: string;
};

export const PageTitle = ({ title }: Title) => {
  return <h1 className="page__title">{title}</h1>;
};
