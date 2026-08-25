import { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { pdf } from "@react-pdf/renderer";

// ==================== TIPOS (mesmos do curriculum) ====================
type LinkItem = { label: string; url: string };

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  link?: LinkItem[];
};

type Academic = {
  title: string;
  status: string;
  institution: string;
  period: string;
  description?: string;
  link?: LinkItem[];
};

type Course = {
  title: string;
  status: string;
  institution: string;
  period: string;
  hours?: string;
  link?: LinkItem[];
};

type Ead = {
  title: string;
  institution: string;
  period: string;
  description?: string;
  link?: LinkItem[];
};

type Ic = {
  title: string;
  period: string;
  advisor: string;
  description: string;
  link?: LinkItem[];
};

type Presentation = {
  title: string;
  event: string;
  date: string;
  type: string;
  link?: LinkItem[];
};

type Skill = {
  name: string;
  category: string;
};

type Participation = {
  img: string;
  title: string;
  event?: string;
  period: string;
  description?: string;
  link?: LinkItem[];
};

export type CurriculumData = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  about?: string;
  experiences: Experience[];
  skills: Skill[];
  academic: Academic[];
  course: Course[];
  ead: Ead[];
  ic: Ic[];
  presentations: Presentation[];
  mural?: Participation[];
};

// ==================== ESTILOS ====================
const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#18181b",
    lineHeight: 1.45,
  },
  header: {
    marginBottom: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#10b981",
    paddingBottom: 12,
  },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: "#09090b",
    marginBottom: 4,
  },
  contact: {
    marginTop: 2,
    fontSize: 9,
    color: "#52525b",
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#059669",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  item: {
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: "#18181b",
  },
  itemMeta: {
    fontSize: 9,
    color: "#059669",
    marginTop: 1,
  },
  itemDesc: {
    fontSize: 9,
    color: "#3f3f46",
    marginTop: 2,
  },
  badge: {
    fontSize: 8,
    color: "#71717a",
    marginLeft: 4,
  },
  skillCategory: {
    marginBottom: 6,
  },
  skillCategoryTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#3f3f46",
    marginBottom: 2,
  },
  skillRow: {
    fontSize: 9,
    color: "#52525b",
  },
  link: {
    fontSize: 8,
    color: "#059669",
    textDecoration: "none",
    marginRight: 6,
  },
  linksRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 2,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    fontSize: 8,
    color: "#a1a1aa",
    textAlign: "center",
  },
});

// ==================== HELPERS ====================
function LinksRow({ links }: { links?: LinkItem[] }) {
  const valid = (links || []).filter((l) => l.url && l.url.trim() !== "");
  if (valid.length === 0) return null;

  return (
    <View style={styles.linksRow}>
      {valid.map((l, i) => (
        <Link key={i} src={l.url} style={styles.link}>
          {l.label || "Link"}
        </Link>
      ))}
    </View>
  );
}

function groupByTitle<T extends { title: string }>(items: T[]) {
  const map = new Map<string, T[]>();
  items.forEach((item) => {
    const key = item.title.trim();
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(item);
  });
  return Array.from(map.entries());
}

// ==================== DOCUMENTO PDF ====================
function CurriculumDocument({ data }: { data: CurriculumData }) {
  const skillsByCategory = data.skills.reduce<Record<string, Skill[]>>(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {}
  );

  const eadGrouped = groupByTitle(data.ead);

  return (
    <Document
      title={`Curriculum - ${data.name || "Dev"}`}
      author={data.name || ""}
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.name || "Carlos Gabriel"}</Text>
          <Text style={styles.contact}>
            {[data.email, data.phone, data.location].filter(Boolean).join("  ·  ")}
          </Text>
        </View>

        {/* Sobre */}
        {data.about && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sobre mim</Text>
            <Text style={styles.itemDesc}>{data.about}</Text>
          </View>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            {Object.entries(skillsByCategory).map(([category, items]) => (
              <View key={category} style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>{category}</Text>
                <Text style={styles.skillRow}>
                  {items.map((s) => s.name).join("  ·  ")}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Experiência */}
        {data.experiences.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experiência</Text>
            {data.experiences.map((exp, i) => (
              <View key={i} style={styles.item}>
                <Text style={styles.itemTitle}>
                  {exp.role} — {exp.company}
                </Text>
                <Text style={styles.itemMeta}>{exp.period}</Text>
                {exp.description && (
                  <Text style={styles.itemDesc}>{exp.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Formação - Acadêmico */}
        {data.academic.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
            {data.academic.map((item, i) => (
              <View key={i} style={styles.item}>
                <Text style={styles.itemTitle}>
                  {item.title}
                  {item.status ? `  (${item.status})` : ""}
                </Text>
                <Text style={styles.itemMeta}>
                  {item.institution} · {item.period}
                </Text>
                {item.description && (
                  <Text style={styles.itemDesc}>{item.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Cursos Complementares */}
        {data.course.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cursos Complementares</Text>
            {data.course.map((item, i) => (
              <View key={i} style={styles.item}>
                <Text style={styles.itemTitle}>
                  {item.title}
                  {item.status ? `  (${item.status})` : ""}
                </Text>
                <Text style={styles.itemMeta}>
                  {item.institution} · {item.period}
                  {item.hours ? ` · ${item.hours}` : ""}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* EAD */}
        {data.ead.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EAD</Text>
            {eadGrouped.map(([title, items]) => (
              <View key={title} style={styles.item}>
                <Text style={styles.itemTitle}>{title}</Text>
                {items.map((item, i) => (
                  <View key={i} style={{ marginTop: 3, marginLeft: 6 }}>
                    <Text style={styles.itemDesc}>
                      • {item.institution} — {item.period}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* IC */}
        {data.ic.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Iniciação Científica</Text>
            {data.ic.map((item, i) => (
              <View key={i} style={styles.item}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemMeta}>
                  {item.period} · Orientador: {item.advisor}
                </Text>
                {item.description && (
                  <Text style={styles.itemDesc}>{item.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Apresentações */}
        {data.presentations.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Apresentações</Text>
            {data.presentations.map((item, i) => (
              <View key={i} style={styles.item}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemMeta}>
                  {item.event} · {item.date}
                </Text>
                {item.type && (
                  <Text style={styles.itemDesc}>{item.type}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Mural (só texto no PDF — imagens ficam pesadas) */}
        {data.mural && data.mural.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Mural / Participações</Text>
            {data.mural.map((item, i) => (
              <View key={i} style={styles.item}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemMeta}>
                  {[item.event, item.period].filter(Boolean).join(" · ")}
                </Text>
                {item.description && (
                  <Text style={styles.itemDesc}>{item.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) =>
            `Página ${pageNumber} de ${totalPages}`
          }
          fixed
        />
        <Text style={styles.footer}>
          Gerado em: {new Date().toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })}. Para mais informações, acesse: https://carlosgabriel.packlor.com
        </Text>
      </Page>
    </Document>
  );
}

// ==================== BOTÃO / AÇÃO DE DOWNLOAD ====================
type Props = {
  data: CurriculumData;
  fileName?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function CurriculumPDF({
  data,
  fileName = "curriculum.pdf",
  className,
  children,
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      const blob = await pdf(<CurriculumDocument data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Erro ao gerar PDF:", err);
      alert("Não foi possível gerar o PDF. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={loading}
      className={
        className ||
        "sticky bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-emerald-500/50 hover:bg-zinc-800 hover:text-emerald-400 disabled:opacity-60"
      }
    >
      {loading ? (
        "Gerando PDF..."
      ) : (
        children || (
          <>
            <span>📄</span>
            Baixar Curriculum (PDF)
          </>
        )
      )}
    </button>
  );
}
