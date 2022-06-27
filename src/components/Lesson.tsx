import classNames from "classnames";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const { slug: slugParam } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM ' • 'k'h'mm",
    { locale: ptBR }
  );

  const classFormat = {
    live: "AO VIVO",
    class: "AULA PRÁTICA",
  };

  const isActiveLesson = slug === slugParam;

  const styleBackgroundLesson = classNames(
    "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
    { "bg-green-500": isActiveLesson }
  );

  const styleTitleLesson = classNames("mt-5 block", {
    "text-white": isActiveLesson,
    "text-gray-200": !isActiveLesson,
  });

  const styleStatusLesson = classNames(
    "flex items-center gap-2 text-sm font-medium",
    {
      "text-white": isActiveLesson,
      "text-blue-500": !isActiveLesson,
    }
  );

  const styleStatusLessonName = classNames(
    "text-xs rounded py-[2px] px-2 text-white border font-bold",
    {
      "border-white": isActiveLesson,
      "border-green-300": !isActiveLesson,
    }
  );

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className={styleBackgroundLesson}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={styleStatusLesson}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={styleStatusLessonName}>{classFormat[type]}</span>
        </header>

        <strong className={styleTitleLesson}>{title}</strong>
      </div>
    </Link>
  );
}
