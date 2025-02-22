import { fetchEntries } from "../lib/contentful";
import { ProofOfWorkEntry } from "../types/contentful";
import Image from "next/image";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import Link from "next/link";

export async function getStaticPaths() {
  const projects: ProofOfWorkEntry[] = await fetchEntries();

  const paths = projects.map((project) => ({
    params: { slug: String(project.fields.slug) || "" },  
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const projects: ProofOfWorkEntry[] = await fetchEntries();
  const project = projects.find((p) => String(p.fields.slug) === params.slug);  

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
  };
}

export default function ProofOfWorkDetail({
  project,
}: {
  project: ProofOfWorkEntry;
}) {
  const getImageUrl = (image: any): string => {
    return image?.fields?.file?.url ? `https:${image.fields.file.url}` : "";
  };

  return (
    <Container>
      <Card>
        {getImageUrl(project.fields.image) && ( 
          <CardMedia>
            <Image
              src={getImageUrl(project.fields.image)}
              alt={String(project.fields.title ?? "Project Image")}
              width={800}
              height={450}
              style={{ objectFit: "cover" }}
            />
          </CardMedia>
        )}
        <CardContent>
          <Typography variant="h4">
            {String(project.fields.title ?? "Untitled Project")}
          </Typography>
          <Typography variant="body1">
            {String(project.fields.description ?? "No description available")}
          </Typography>

          {project.fields.demo && (
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
              href={String(project.fields.demo)}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </Button>
          )}

          <Link href="/proof-of-work" passHref>
            <Button variant="outlined" sx={{ mt: 2, ml: 2 }}>
              Back to List
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
}
