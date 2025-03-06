import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabase-client";
import { Post } from "./PostList";
interface Props {
  postId: number;
}

const fetchPostById = async (id: number): Promise<Post> => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data as Post;
};





const PostDetail = ({ postId }: Props) => {
  const { data, error, isLoading } = useQuery<Post, Error>({
    queryKey: ["post", postId],
    queryFn: () => fetchPostById(postId),
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error {error.message}</div>;
  console.log(data);
  return <div className="pt-10">



    <h2>{data?.title}</h2>

    <img src={data?.image_url} alt={data?.title} />
    <p>{data?.content}</p>
    <p>Posted on:{new Date(data!.created_at).toLocaleDateString()}</p>
  </div>;
};

export default PostDetail;
